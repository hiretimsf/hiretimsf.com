"use client";

import * as React from "react";
import { motion, isMotionComponent, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  "ref"
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

const motionCache = new WeakMap<object, React.ElementType>();

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  const isValid = React.isValidElement(children);
  const childrenType = isValid ? children.type : null;

  const isAlreadyMotion =
    typeof childrenType === "object" &&
    childrenType !== null &&
    isMotionComponent(childrenType);

  const Base = React.useMemo(() => {
    if (!isValid) return "div";

    if (isAlreadyMotion) {
      return childrenType as React.ElementType;
    }

    if (!childrenType) {
      return "div";
    }

    if (typeof childrenType === "string") {
      if (childrenType in motion) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (motion as any)[childrenType] as React.ElementType;
      }
      return motion.create(childrenType);
    }

    if (
      typeof childrenType !== "object" &&
      typeof childrenType !== "function"
    ) {
      return "div";
    }

    const type = childrenType as object;
    if (motionCache.has(type)) {
      return motionCache.get(type)!;
    }

    const created = motion.create(childrenType as React.ElementType);
    motionCache.set(type, created);
    return created;
  }, [isValid, isAlreadyMotion, childrenType]);

  const childRef = isValid ? (children.props as AnyProps).ref : undefined;

  const handleRef = React.useMemo(
    // eslint-disable-next-line
    () => mergeRefs(childRef as React.Ref<T>, ref),
    [childRef, ref],
  );

  if (!isValid) return null;

  const childProps = { ...(children.props as AnyProps) };
  delete childProps.ref;

  const mergedProps = mergeProps(childProps, props);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.createElement(Base as any, {
    ...mergedProps,
    ref: handleRef,
  });
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};

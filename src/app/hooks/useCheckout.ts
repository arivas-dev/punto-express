"use client";

import { redirect, RedirectType } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export type Inputs = {
  email: string;
  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  address: string;
  state: string;
  zip: string;
};

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(async (data: Inputs) => {
    setLoading(true);

    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      return router.push("/thanks");
    } catch (error) {
      // setError("Payment failed");
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const form = {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
  };

  return {
    form,
    isLoading: loading,
  };
}

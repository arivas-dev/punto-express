import { redirect } from "next/navigation";
import { useState } from "react";
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


  const onSubmit = async (data: Inputs) => {
    // Simulate a payment request with /api/checkout
    setLoading(true);
    // setError("");
    return;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        redirect("/thanks");
      } else {
        // setError("Payment failed");
      }
    } catch (error) {
      // setError("Payment failed");
    }
  };

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

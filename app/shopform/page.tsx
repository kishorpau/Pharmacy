"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShopSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { login } from "@/actions/login";
import { Input } from "@/components/ui/input";
const ShopPage = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const onSubmit = (values: z.infer<typeof ShopSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  const form = useForm<z.infer<typeof ShopSchema>>({
    resolver: zodResolver(ShopSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="****"
                    {...field}
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
        </form>
      </Form>
    </div>
  );
};

export default ShopPage;

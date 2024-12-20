'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React from 'react';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Textarea } from './ui/textarea';

const FormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name must be at least one character',
  }),
  email: z.string().email('Invalid email address').min(2, {
    message: 'Email must be at least 2 characters',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters',
  }),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-blue-300 rounded-md p-6 max-w-md mx-auto"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-1 font-bold text-black">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-100 text-black"
                  placeholder="Full Name"
                  {...field}
                />
              </FormControl>
              {/* Show error message if there's an error */}
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.name.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-1 font-bold text-black">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-100 text-black"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              {/* Show error message if there's an error */}
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black pl-1 font-bold">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="bg-gray-100 text-black"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              {/* Show error message if there's an error */}
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.message.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-red-700 text-white font-extrabold mt-4 w-full"
        >
          SEND EMAIL
        </Button>
      </form>
    </Form>
  );
}

async function onSubmit(values: z.infer<typeof FormSchema>) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'a5cc582d-8ed1-4776-b268-03580c2624c1',
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('Email sent successfully:', result);
      // Optionally, show a success message or redirect
    } else {
      console.error('Error sending email:', result);
      // Optionally, show an error message
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle network or unexpected errors gracefully
  }
}

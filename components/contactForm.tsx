'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { useToast } from '../components/ui/toast';
import { Textarea } from './ui/textarea';
import { env } from '../';

const FormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name must be atleast one character',
  }),
  email: z.string().email('Invalid email address').min(2, {
    message: 'email must be alteast 2 characters',
  }),
  message: z.string().min(10, {
    message: 'message must be atleast 10 characters',
  }),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-blue-500 rounded-md p-4 max-w-[1/2]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-1 font-bold">Name</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="Full Name"
                  {...field}
                ></Input>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-1 font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="Email"
                  {...field}
                ></Input>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-1 font-bold">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="bg-white"
                  placeholder="Message"
                  {...field}
                ></Textarea>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-red-700 text-white font-extrabold mt-2"
        >
          SEND EMAIL
        </Button>
      </form>
    </Form>
  );
}

async function onSubmit(values: z.infer<typeof FormSchema>) {
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
    console.log(result);
  }
}

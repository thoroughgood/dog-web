'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React from 'react';
import { string, z } from 'zod';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

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
  breed: z.string({ message: 'There was a problem :(' }),
  colour: z.string().min(1, {
    message: 'Colour must have at least one character',
  }),
});

interface EmailFormProps {
  breed?: string; // breed prop is now optional
}

export function EmailForm({ breed }: EmailFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      breed: breed || 'Poodle', // Default value for breed if not passed as a prop
    },
  });

  // You don't need defaultBreed here anymore because it's handled by the form state.
  console.log(form.getValues('breed'));

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-blue-300 rounded-md p-6 w-full mx-auto" // Changed max-w-xl to max-w-2xl for a wider form
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
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.message.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Breed</FormLabel>
              <Select
                value={field.value} // Bind the value to form state
                onValueChange={field.onChange} // Update form state when selection changes
              >
                <FormControl>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select a breed" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Poodle">Poodle</SelectItem>
                  <SelectItem value="Cavoodle">Cavoodle</SelectItem>
                  <SelectItem value="Labradoodle">
                    Labradoodle
                  </SelectItem>
                  <SelectItem value="Groodle">Groodle</SelectItem>
                  <SelectItem value="Spoodle">Spoodle</SelectItem>
                  <SelectItem value="Dachshund">Dachshund</SelectItem>
                  <SelectItem value="Pug">Pug</SelectItem>
                  <SelectItem value="French Bulldog">
                    French Bulldog
                  </SelectItem>
                  <SelectItem value="Bulldog">Bulldog</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.breed && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.breed.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="colour"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black pl-1 font-bold">
                Colour
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-100 text-black"
                  placeholder="Colour"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.colour && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.colour.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-red-500 hover:bg-red-400 text-white font-extrabold mt-4 w-full"
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
        breed: values.breed,
        colour: values.colour,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('Email sent successfully:', result);
    } else {
      console.error('Error sending email:', result);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

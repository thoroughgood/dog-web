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
import breedsData from '../public/dogBreeds.json'

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
  
  const breeds = breedsData.dogBreeds
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-sky-900 rounded-md p-6 w-full mx-auto" // Changed max-w-xl to max-w-2xl for a wider form
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-1 font-bold text-white">
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
              <FormLabel className="pl-1 font-bold text-white">
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
              <FormLabel className="text-white pl-1 font-bold">
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
              <FormLabel className="text-white">Breed</FormLabel>
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
                {breeds.map((breed) => (
                  <SelectItem key={breed.name} value={breed.name}>{breed.name}</SelectItem>)
                )}
                <SelectItem value="other">Other</SelectItem>
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
              <FormLabel className="text-white pl-1 font-bold">
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
        <div className="flex justify-center w-full">
          <Button
          type="submit"
          className="bg-red-500 hover:bg-red-400 text-white font-extrabold mt-4 flex"
        >
          SEND EMAIL
        </Button>
        </div>
      </form>
    </Form>
  );
}

async function onSubmit(values: z.infer<typeof FormSchema>) {
  console.log("In on submit")
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'c8e4e02b-95cf-442e-b8a7-a44a896fdae2',
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

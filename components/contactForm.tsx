'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
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
import { CheckCircle, Loader2 } from 'lucide-react';
import breedsData from '../public/dogBreeds.json';

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
  breed?: string;
}

export function EmailForm({ breed }: EmailFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      breed: '',
      colour: '',
    },
  });

  const { reset } = form;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const breeds = breedsData.dogBreeds;

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c8e4e02b-95cf-442e-b8a7-a44a896fdae2',
          ...values,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset({ breed: breed || 'Poodle' });
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-sky-900 rounded-md p-6 w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-1 font-bold text-white">Name</FormLabel>
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
              <FormLabel className="pl-1 font-bold text-white">Email</FormLabel>
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
              <FormLabel className="text-white pl-1 font-bold">Message</FormLabel>
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
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select a breed" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {breeds.map((breed) => (
                    <SelectItem key={breed.name} value={breed.name}>
                      {breed.name}
                    </SelectItem>
                  ))}
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
              <FormLabel className="text-white pl-1 font-bold">Colour</FormLabel>
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Sending...
              </>
            ) : (
              'SEND EMAIL'
            )}
          </Button>
        </div>

        {isSuccess && (
          <div className="mt-4 text-green-400 flex items-center justify-center gap-2">
            <CheckCircle className="text-green-400" size={20} />
            <span>Your message has been sent!</span>
          </div>
        )}

        {isError && (
          <div className="mt-4 text-red-500 flex flex-col items-center justify-center gap-2">
            <span>Something went wrong. Please try again later. If the problem persists, please send us an email directly</span>
          </div>
        )}
      </form>
    </Form>
  );
}

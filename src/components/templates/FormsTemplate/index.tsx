'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FormsTemplate() {
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState<string>('');
  const image = watch('image');
  const onSubmit = (values: any) => {};

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];

      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" />
        <input
          {...register('username', {
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />
        <input
          {...register('username', {
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />
        <Image src={imagePreview} alt="" width={100} height={100} />
        <label htmlFor="picture">
          이름
          <input id="picture" {...register('image')} type="file" accept="image/*" />
        </label>
      </form>
    </div>
  );
}

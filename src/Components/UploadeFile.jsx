import React from 'react';
import { useForm } from 'react-hook-form';

function UploadForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>ID:</label>
                <input {...register('id', { required: true })} />
                {errors.id && <span>ID is required</span>}
            </div>
            <div>
                <label>Title:</label>
                <input {...register('title', { required: true })} />
                {errors.title && <span>Title is required</span>}
            </div>
            <div>
                <label>Price:</label>
                <input type="number" {...register('price', { required: true })} />
                {errors.price && <span>Price is required</span>}
            </div>
            <div>
                <label>Image:</label>
                <input type="file" {...register('image', { required: true })} />
                {errors.image && <span>Image is required</span>}
            </div>
            <div>
                {/* Generate unique name for the uploaded image */}
                <input type="hidden" {...register('imageName', { value: `${Date.now()}-${Math.random().toString(36).substring(7)}` })} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UploadForm;
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navegate = useNavigate();
  const params = useParams();
  console.log(params);

  const onSubmit = async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success('TAREA ACTUALIZADA', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#ffff',
        },
      });
      console.log('actulaizando');
    } else {
      await createTask(data);
      toast.success('TAREA CREADA', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#ffff',
        },
      });
    }
    navegate('/tasks');
  };

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        console.log('obteniendo los datos');
        const res = await getTask(params.id);
        setValue('titulo', res.data.titulo);
        setValue('descripcion', res.data.descripcion);
        setValue('completado', res.data.completado);
      }
    }
    loadTask();
  }, [params.id, setValue]);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Titulo"
          {...register('titulo', { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.titulo && <span>Este campo es requerido</span>}
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register('descripcion', { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.descripcion && <span>Este campo es requerido</span>}
        <label className="block mb-3">
          <input type="checkbox" {...register('completado')} className="mr-2" />
          Completado
        </label>
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const aceptado = window.confirm('Estas seguro de eliminar?');
              if (aceptado) {
                await deleteTask(params.id);
                toast.success('TAREA ELIMINADA', {
                  position: 'bottom-right',
                  style: {
                    background: '#101010',
                    color: '#ffff',
                  },
                });
                navegate('/tasks');
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

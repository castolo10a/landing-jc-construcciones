import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({ mode: "all" });

  const onSubmit = (data: ContactFormData) => {
    toast.promise(
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: "Enviando mensaje...",
        success: "¡Mensaje enviado con éxito!",
        error: "Ocurrió un error al enviar el mensaje.",
      }
    );
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
  };
};

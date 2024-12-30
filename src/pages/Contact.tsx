import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import { CircularLoading, SpinLoading } from 'respinner';
import { Slide, ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            `service_4kp24nw`,
            `template_jscxwwh`,
            e.currentTarget, 
            "9ZIgVLaQhluUkMCVL"
        ).then(
            (result) => {
                console.log(result);
                setIsSubmitting(false);
                return(toast.success("Message Sent!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                    }))
            },
            (error) => {
                console.log(error);
                setIsSubmitting(false);
            }
        );

        // Clears the form after sending the email
        e.currentTarget.reset();
    };

    return (
        <div id="contact" className="bg-blue-950 h-auto py-10 px-4">
            <div className="max-w-4xl mx-auto text-center mb-28">
                <h1 className="text-4xl font-bold text-white m-10">Contact Me</h1>
                <p className="text-gray-200 mb-4">
                    Feel free to reach out if you're interested in working together or just want to say hi!
                </p>
                <form className="space-y-4" onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg bg-blue-900"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg bg-blue-900"
                        required
                        title="Please enter a valid email address."
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 border rounded-lg bg-blue-900"
                        rows={5}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400"
                    >
                        {isSubmitting ? <SpinLoading fill="white" borderRadius={4} count={12}/> : 'Send'}
                    </button>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition={Slide}
                    />
                </form>
            </div>
        </div>
    );
};


export default Contact
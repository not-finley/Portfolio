import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import { BounceLoading } from 'respinner';
import { Slide, ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.currentTarget;

        emailjs.sendForm(
            `service_4kp24nw`,
            `template_jscxwwh`,
            form,
            "9ZIgVLaQhluUkMCVL"
        ).then(
            (result) => {
                console.log(result);
                setIsSubmitting(false);
              
                form.reset();

                toast.success("Message Sent!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            },
            (error) => {
                console.error("EmailJS Error:", error);
                setIsSubmitting(false);
                toast.error("Failed to send message. Please try again.");
            }
        );
    };

    return (
        <div id="contact" className="bg-slate-900/30 py-24 px-6 relative">
            {/* Soft bottom ambient illumination glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center z-10 relative">
                <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Contact Me</h1>
                <p className="text-slate-300 mb-10 max-w-md mx-auto">
                    Feel free to reach out if you're interested in working together or just want to say hi!
                </p>
                
                <form className="space-y-4 text-left" onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full p-4 border border-slate-800 rounded-xl bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full p-4 border border-slate-800 rounded-xl bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-4 border border-slate-800 rounded-xl bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        rows={5}
                        required
                    ></textarea>
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center bg-indigo-600 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/10 hover:bg-indigo-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-98"
                    >
                        {isSubmitting ? <BounceLoading gap={5} height={20} fill="white"/> : 'Send Message'}
                    </button>
                    
                    <ToastContainer position="bottom-right" autoClose={5000} theme="dark" transition={Slide} />
                </form>
            </div>
        </div>
    );
};


export default Contact
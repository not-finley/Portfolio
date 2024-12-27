const Contact = () => {
    return (
        <div  id="contact" className="bg-gray-300 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1>
                <p className="text-gray-600 mb-4">
                    Feel free to reach out if you're interested in working together or just want to say hi!
                </p>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg bg-blue-900"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg bg-blue-900"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 border rounded-lg bg-blue-900"
                        rows={5}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact
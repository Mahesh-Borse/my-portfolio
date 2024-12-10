import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto py-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg">
                Feel free to reach out via email at{' '}
                <a
                    href="mailto:maheshborse2k@gmail.com"
                    className="text-blue-500 underline hover:text-blue-700"
                >
                    maheshborse2k@gmail.com
                </a>.
            </p>
        </div>
    );
};

export default Contact;


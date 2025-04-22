import React from 'react';

const Button = ({label, type, onClick}) => {
    return (
        <button
        type={type}
        onClick={onClick}
        class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white cursor-pointer whitespace-no-wrap bg-[#176AE5] border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-[#176AE5] hover:border-[#176AE5] focus:outline-none">
            {label}
        </button>
    );
};

export default Button;
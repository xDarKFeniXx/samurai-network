import React from 'react';
type PropsT={
    messageError: string|null
}
export const ErrorPage:React.FC<PropsT> = ({messageError}) => {
    return (
        <div>
            Что то пошло не так
            {messageError}
        </div>
    );
};


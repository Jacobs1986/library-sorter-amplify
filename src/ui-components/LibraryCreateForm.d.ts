/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LibraryCreateFormInputValues = {
    name?: string;
    createdAt?: string;
};
export declare type LibraryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LibraryCreateFormOverridesProps = {
    LibraryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LibraryCreateFormProps = React.PropsWithChildren<{
    overrides?: LibraryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LibraryCreateFormInputValues) => LibraryCreateFormInputValues;
    onSuccess?: (fields: LibraryCreateFormInputValues) => void;
    onError?: (fields: LibraryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LibraryCreateFormInputValues) => LibraryCreateFormInputValues;
    onValidate?: LibraryCreateFormValidationValues;
} & React.CSSProperties>;
export default function LibraryCreateForm(props: LibraryCreateFormProps): React.ReactElement;

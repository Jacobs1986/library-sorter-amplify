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
export declare type LibraryUpdateFormInputValues = {
    name?: string;
};
export declare type LibraryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LibraryUpdateFormOverridesProps = {
    LibraryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LibraryUpdateFormProps = React.PropsWithChildren<{
    overrides?: LibraryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    library?: any;
    onSubmit?: (fields: LibraryUpdateFormInputValues) => LibraryUpdateFormInputValues;
    onSuccess?: (fields: LibraryUpdateFormInputValues) => void;
    onError?: (fields: LibraryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LibraryUpdateFormInputValues) => LibraryUpdateFormInputValues;
    onValidate?: LibraryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LibraryUpdateForm(props: LibraryUpdateFormProps): React.ReactElement;

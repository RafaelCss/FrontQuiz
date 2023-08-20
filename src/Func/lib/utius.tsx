import { Dispatch, SetStateAction } from 'react';
import { Dictionary, ErrorMessage } from '../Model';
import type { ValidatorRule, Callbacks } from 'rc-field-form/lib/interface';
import _, { isEmpty } from 'lodash';

const primeiraLetraMaiuscula = (texto: string): string =>
  texto ? texto[0].toUpperCase() + texto.slice(1) : texto;

const primeiraLetraMinuscula = (texto: string): string =>
  texto ? texto[0].toLowerCase() + texto.slice(1) : texto;

export const formRuleErrorsServidor = (
  errors: Dictionary<string[]>
): ValidatorRule => ({
  validator: async (rule) => {
    if (!errors) return;
    const { field } = rule as { field: string };
    if (errors[primeiraLetraMinuscula(field)]) {
      throw new Error(errors[primeiraLetraMinuscula(field)][0]);
    }

    if (errors[primeiraLetraMaiuscula(field)]) {
      throw new Error(errors[primeiraLetraMaiuscula(field)][0]);
    }
  },
});

export function transformErrorMessage(errors: ErrorMessage[]): {
  [key: string]: string[];
} {
  const transformedErrors: { [key: string]: string[] } = {};

  for (const error of errors) {
    if (transformedErrors.hasOwnProperty(error.property)) {
      transformedErrors[error.property].push(error.message);
    } else {
      transformedErrors[error.property] = [error.message];
    }
  }

  return transformedErrors;
}

export const formFiltroErrors = (
  chave: string,
  errors: Dictionary<string[]>
): string[] => {
  const errosChave: string[] = [];

  if (!errors) {
    return errosChave;
  }

  if (errors[primeiraLetraMaiuscula(chave)]) {
    errosChave.push(...errors[primeiraLetraMaiuscula(chave)]);
  }

  if (errors[primeiraLetraMinuscula(chave)]) {
    errosChave.push(...errors[primeiraLetraMinuscula(chave)]);
  }

  return errosChave.filter((erro) => erro !== null && erro !== undefined);
};

export const formHandleErrors =
  (
    errors: Dictionary<string[]>,
    setErrors: Dispatch<SetStateAction<Dictionary<string[]>>>
  ): Callbacks<unknown>['onValuesChange'] =>
  (changedValues, values) => {
    if (isEmpty(errors)) {
      return;
    }

    const novoErrors = { ...errors };
    Object.keys(changedValues).forEach((nomeCampo) => {
      if (nomeCampo) {
        delete novoErrors[primeiraLetraMaiuscula(nomeCampo)];
        delete novoErrors[primeiraLetraMinuscula(nomeCampo)];
      }
    });
    setErrors(novoErrors);
  };

import React from 'react'
import { InputBox } from './style'
import { useFormContext } from 'react-hook-form'
import { Input } from '../Input'

export const BoxInputs = () => {
  const { register } = useFormContext()

  return (
    <>
      <InputBox>
        <div>
          <Input
            placeholder="CEP"
            type="number"
            className="cep"
            {...register('cep')}
          />
        </div>
      </InputBox>
      <InputBox>
        <div className="street">
          <Input type="text" placeholder="Rua" />
        </div>
      </InputBox>
      <InputBox>
        <div>
          <Input type="text" placeholder="Número" />
        </div>
        <div className="complement">
          <Input type="text" placeholder="Complemento" />
          <p>Opcional</p>
        </div>
      </InputBox>
      <InputBox>
        <div>
          <Input type="text" placeholder="Bairro" />
        </div>
        <div className="city">
          <Input type="text" placeholder="Cidade" />
        </div>
        <div className="uf">
          <Input type="text" placeholder="UF" />
        </div>
      </InputBox>
    </>
  )
}

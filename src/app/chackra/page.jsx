"use client";
import { FunctionComponent } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
  phone: yup.number().required(),
  description: yup.string().required(),
});

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  //function setErros(error: any) {
  //console.log('Errors', error)
  //}
  return (
    <ChakraProvider>
      <Head>
        <title>Formulários con NextJs y Chakra Ui</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          minHeight="100vh"
          width="full"
          align="center"
          justifyContent="center"
          backgroundColor="gray.900"
        >
          <Box
            px={12}
            py={12}
            width="full"
            maxWidth="450px"
            textAlign="center"
            boxShadow="lg"
            background="gray.700"
            borderRadius="6px"
          >
            <Heading>
              <Text color="gray.200" fontSize="2xl">
                Registration form
              </Text>
            </Heading>
            <Box>
              <form
                action=""
                autoComplete="off" 
                onSubmit={handleSubmit(onSubmit)}
              >
                <Flex justify="space-between">
                  <FormControl marginTop="15px" width="49%">
                    <FormLabel color="gray.200">Nombre</FormLabel>
                    <Input
                      type="text"
                      border="none"
                      outline="none"
                      bgColor="gray.900"
                      focusBorderColor="gray.600"
                      color="gray.200"
                      placeholder="Nombre"
                      {...register("firstName")}
                    />
                    <p style={{ color: "red" }}>{errors?.firstName?.message}</p>
                  </FormControl>
                  <FormControl marginTop="15px" width="49%">
                    <FormLabel color="gray.200">Apellido</FormLabel>
                    <Input
                      type="text"
                      border="none"
                      outline="none"
                      bgColor="gray.900"
                      focusBorderColor="gray.600"
                      color="gray.200"
                      placeholder="Apellido"
                      {...register("lastName")}
                    />
                    <p style={{ color: "red" }}>{errors?.lastName?.message}</p>
                  </FormControl>
                </Flex>
                <FormControl marginTop="15px">
                  <FormLabel color="gray.200">Correo eletrónico</FormLabel>
                  <Input
                    type="text"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    placeholder="E-mail"
                    {...register("email")}
                  />
                  <p style={{ color: "red" }}>{errors?.email?.message}</p>
                </FormControl>
                <Flex justify="space-between">
                  <FormControl marginTop="15px" width="49%">
                    <FormLabel color="gray.200">Dirección</FormLabel>
                    <Input
                      type="text"
                      border="none"
                      outline="none"
                      bgColor="gray.900"
                      focusBorderColor="gray.600"
                      color="gray.200"
                      placeholder="Dirección"
                      {...register("address")}
                    />
                    <p style={{ color: "red" }}>{errors?.address?.message}</p>
                  </FormControl>
                  <FormControl marginTop="15px" width="49%">
                    <FormLabel color="gray.200">Teléfono</FormLabel>
                    <Input
                      type="text"
                      border="none"
                      outline="none"
                      bgColor="gray.900"
                      focusBorderColor="gray.600"
                      color="gray.200"
                      placeholder="Teléfono"
                      {...register("phone")}
                    />
                    <p style={{ color: "red" }}>{errors?.phone?.message}</p>
                  </FormControl>
                </Flex>
                <FormControl marginTop="15px">
                  <FormLabel color="gray.200">Escribí acá tu comentario</FormLabel>
                  <Textarea
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    resize="none"
                    placeholder="Descripción"
                    {...register("description")}
                  />
                  <p style={{ color: "red" }}>{errors?.description?.message}</p>
                </FormControl>
                <Button
                  type="submit"
                  width="full"
                  bgColor="blue.300"
                  mt={4}
                  color="gray.900"
                  _hover={{
                    color: "white",
                    bgColor: "blue.600",
                  }}
                >
                  Enviar 
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </main>
    </ChakraProvider>
  );
};

export default Cadastro;

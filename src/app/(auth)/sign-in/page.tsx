"use client";
import { Button } from "@/components/atomics/button";
import { Checkbox } from "@/components/atomics/checkbox";
import { Input } from "@/components/atomics/input";
import Title from "@/components/atomics/title";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/atomics/form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/atomics/use-toast";
import { useLoginMutation } from "@/services/auth.service";
import { signIn } from "next-auth/react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

type FormData = yup.InferType<typeof schema>;

function SignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [login, { isLoading }] = useLoginMutation();

  async function onSubmit(values: FormData) {
    try {
      const res = await login(values).unwrap();

      //* Next Auth Session
      if (res.success) {
        const user = res.data;

        const loginRes = await signIn("credentials", {
          id: user.id,
          email: user.email,
          name: user.name,
          token: user.token,
          callbackUrl: searchParams.get("callbackUrl") || "/",
          redirect: false,
        });
        toast({
          title: "Login Successful",
          description: "You are now logged in.",
          open: true,
        });

        router.push(loginRes?.url || "/");
        console.log("🚀 ~ onSubmit ~ loginRes?.url :", loginRes?.url);
      }
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.data.mesaage,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="bg-[#0D0E25]">
      <div className="mx-auto max-w-screen-lg h-screen flex items-center justify-center">
        <div className="p-8 bg-white rounded-[30px] max-w-full lg:max-w-[460px] lg:min-w-[460px] space-y-[30px]">
          <div className="flex flex-row items-center gap-x-3">
            <Image
              src="/icons/ic_zgaphy.png"
              alt="nidejia"
              height={50}
              width={50}
            />

            <Title title="Zgaphy" subtitle="" section="" />
          </div>

          <Title
            title="Sign In"
            subtitle="And get the best artworks you deserve"
            section=""
          />

          {/* Form for create account */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[30px]"
            >
              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Email Address"
                          icon="/icons/sms.svg"
                          variant="auth"
                          className={
                            form.formState.errors.email && "border-destructive"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          icon="/icons/lock-circle.svg"
                          variant="auth"
                          className={
                            form.formState.errors.password &&
                            "border-destructive"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-semibold leading-[21px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button
                className="bg-orange-500"
                type="submit"
                disabled={isLoading}
              >
                Sign In
              </Button>
              <Link href="/sign-up">
                <Button variant="third" type="button" className="mt-3">
                  Create New Account
                </Button>
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

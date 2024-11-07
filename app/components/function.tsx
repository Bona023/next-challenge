"use server";
export default async function handleForm(formData: FormData) {
    console.log(formData.get("email"), formData.get("username"), formData.get("password"));
}

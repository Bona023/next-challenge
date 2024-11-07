"use server";
export default async function handleForm(prevState: any, formData: FormData) {
    const password = formData.get("password");
    if (password == "12345") {
        return {
            success: true,
        };
    } else {
        return {
            success: false,
            errors: ["Wrong password"],
        };
    }
}

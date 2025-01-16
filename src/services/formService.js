export const submitForm = async (formData) => {
  try {
    const response = await fetch('https://www.formbackend.com/f/36a8053341374fc6', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        captchaToken: formData.token,
      }),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    // Don't try to parse JSON, just check if the status is OK
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}; 
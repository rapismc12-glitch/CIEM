'use server'

export async function submitApplication(data: any) {
    try {
        // Utiliza FormSubmit para enviar el JSON directamente al correo
        // En un futuro, simplemente cambia esta URL por la de N8N Cloud o tu servidor VPS
        const response = await fetch('https://formsubmit.co/ajax/rapismc12@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Status ${response.status}: ${errorText.substring(0, 50)}`);
        }

        return { success: true };
    } catch (error: any) {
        console.error('Webhook error:', error);
        return { success: false, error: error.message || 'Error desconocido' };
    }
}

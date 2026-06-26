import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nombre, empresa, email, mensaje } = await request.json();

    if (!nombre || !email || !mensaje) {
      return Response.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Avenor Studio <onboarding@resend.dev>",
      to: "fiolchristian96@gmail.com",
      replyTo: email,
      subject: `Nuevo contacto de ${nombre} — Avenor Studio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Nuevo mensaje de contacto</h2>
          <hr style="border-color: #e2e8f0;" />
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Empresa:</strong> ${empresa || "No especificada"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f8f8ff; padding: 1rem; border-radius: 8px; color: #333;">${mensaje}</p>
          <hr style="border-color: #e2e8f0;" />
          <p style="color: #94a3b8; font-size: 0.8rem;">Avenor Studio — Sistema de contacto</p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 200 });

  } catch (error) {
    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
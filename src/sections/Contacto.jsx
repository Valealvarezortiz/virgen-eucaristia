import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarMensaje = async (e) => {
    e.preventDefault();
    setEstado("Enviando...");

    try {
      await emailjs.send(
        "service_cvq5c8v",
        "template_zy6b0i9",
        form,
        {
          publicKey: "bO_DQNR-Vc8KwWotv",
        }
      );

      setEstado("Mensaje enviado correctamente. Muchas gracias.");

      setForm({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      setEstado("Ocurrió un error al enviar el mensaje.");
    }
  };

  return (
    <section className="section" id="contacto">
      <div className="container">
        <h2 className="title">Contacto</h2>
        <div className="section-divider"></div>

        <p className="subtitle">
          Un espacio para dejar consultas, intenciones o mensajes.
        </p>

        <div
          className="card"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <form
            onSubmit={enviarMensaje}
            style={{ display: "grid", gap: "18px" }}
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <textarea
              name="mensaje"
              rows="5"
              placeholder="Escribí tu mensaje"
              value={form.mensaje}
              onChange={handleChange}
              style={inputStyle}
              required
            ></textarea>

            <button type="submit" className="btn-primary">
              Enviar mensaje
            </button>
          </form>

          {estado && (
            <p style={{ marginTop: "16px", textAlign: "center" }}>
              {estado}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid rgba(63, 49, 40, 0.14)",
  outline: "none",
  backgroundColor: "rgba(255,255,255,0.95)",
};

export default Contacto;
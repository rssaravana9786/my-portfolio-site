import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 80px 20px;
  background: #000;
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #00c3ff, #ff00ff);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 30px;
  }
`;

const Form = styled(motion.form)`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input, textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    background: #222;
    color: white;
    outline: none;
  }

  textarea {
    height: 120px;
    resize: none;
  }
`;

const Button = styled(motion.button)`
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #00c3ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff00ff;
  }
`;

const SuccessMessage = styled.p`
  color: #00ff00;
  font-size: 1rem;
  margin-top: 10px;
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <p>Reach out to me for collaboration or job opportunities.</p>

      <Form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <Button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          Send Message
        </Button>
      </Form>

      {success && <SuccessMessage>✅ Message sent successfully!</SuccessMessage>}
    </Section>
  );
};

export default ContactSection;

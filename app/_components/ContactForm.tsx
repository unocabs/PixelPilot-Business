"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { topic: "General question" } });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="ok"
          className="success-card"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow">Message sent</p>
          <h2>Thanks — we&apos;ll reply within a day.</h2>
          <p className="success-note">(Demo only: no real email is sent.)</p>
          <button
            type="button"
            className="button secondary"
            onClick={() => {
              reset();
              setSent(false);
            }}
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          className="form-card"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          noValidate
        >
          <div className="form-row form-row-2">
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                {...register("name", { required: "Your name, please." })}
              />
              {errors.name && <em className="field-error">{errors.name.message}</em>}
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                {...register("email", {
                  required: "Where can we reply?",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Check that email." },
                })}
              />
              {errors.email && <em className="field-error">{errors.email.message}</em>}
            </label>
          </div>

          <label className="field">
            <span>Topic</span>
            <select {...register("topic")}>
              <option>General question</option>
              <option>Private event</option>
              <option>Catering</option>
              <option>Press</option>
            </select>
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              rows={5}
              {...register("message", {
                required: "Add a quick message.",
                minLength: { value: 10, message: "A little more detail, please." },
              })}
            />
            {errors.message && <em className="field-error">{errors.message.message}</em>}
          </label>

          <button type="submit" className="button primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  party: number;
  date: string;
  time: string;
  occasion: string;
  notes: string;
};

const TIMES = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      party: 2,
      occasion: "Casual",
    },
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(values);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="success-card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <p className="eyebrow">Reservation request received</p>
          <h2>See you, {submitted.name.split(" ")[0]}.</h2>
          <p>
            We&apos;ll confirm a table for <strong>{submitted.party}</strong> on{" "}
            <strong>{submitted.date}</strong> at <strong>{submitted.time}</strong> shortly.
            A demo confirmation will be sent to <strong>{submitted.email}</strong>.
          </p>
          <p className="success-note">
            (This is a PixelPilot demo — no real reservation is created.)
          </p>
          <button
            type="button"
            className="button secondary"
            onClick={() => {
              reset();
              setSubmitted(null);
            }}
          >
            Make another booking
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
              <span>Full name</span>
              <input
                type="text"
                autoComplete="name"
                {...register("name", { required: "Tell us who's booking." })}
              />
              {errors.name && <em className="field-error">{errors.name.message}</em>}
            </label>
            <label className="field">
              <span>Phone</span>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                {...register("phone", {
                  required: "We need a number to confirm.",
                  pattern: { value: /^[0-9+\-\s()]{7,}$/, message: "Use digits, spaces, +, -." },
                })}
              />
              {errors.phone && <em className="field-error">{errors.phone.message}</em>}
            </label>
          </div>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Where should we send confirmation?",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "That email looks off." },
              })}
            />
            {errors.email && <em className="field-error">{errors.email.message}</em>}
          </label>

          <div className="form-row form-row-3">
            <label className="field">
              <span>Party size</span>
              <input
                type="number"
                min={1}
                max={20}
                {...register("party", {
                  required: true,
                  valueAsNumber: true,
                  min: { value: 1, message: "At least 1." },
                  max: { value: 20, message: "Call us for parties over 20." },
                })}
              />
              {errors.party && <em className="field-error">{errors.party.message}</em>}
            </label>
            <label className="field">
              <span>Date</span>
              <input
                type="date"
                {...register("date", { required: "Pick a date." })}
              />
              {errors.date && <em className="field-error">{errors.date.message}</em>}
            </label>
            <label className="field">
              <span>Time</span>
              <select {...register("time", { required: "Pick a time." })}>
                <option value="">Select…</option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time && <em className="field-error">{errors.time.message}</em>}
            </label>
          </div>

          <label className="field">
            <span>Occasion</span>
            <select {...register("occasion")}>
              <option>Casual</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Work meeting</option>
              <option>Other</option>
            </select>
          </label>

          <label className="field">
            <span>Notes (optional)</span>
            <textarea rows={3} {...register("notes")} />
          </label>

          <button type="submit" className="button primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Request reservation"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

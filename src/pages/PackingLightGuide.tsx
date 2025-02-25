import React from "react";
import { Container } from "react-bootstrap";

const packingTips = [
  {
    id: 1,
    title: "Choose the Right Bag",
    description:
      "A carry-on suitcase or a backpack is ideal for short trips. Make sure it’s lightweight and has enough compartments.",
  },
  {
    id: 2,
    title: "Plan Your Outfits",
    description:
      "Stick to a color scheme so you can mix and match easily. Choose lightweight, wrinkle-free fabrics.",
  },
  {
    id: 3,
    title: "Use Packing Cubes",
    description:
      "Packing cubes help keep your items organized and save space in your luggage.",
  },
  {
    id: 4,
    title: "Minimize Toiletries",
    description:
      "Bring travel-sized toiletries or rely on hotel-provided essentials.",
  },
  {
    id: 5,
    title: "Wear Your Bulkiest Items",
    description:
      "If you're bringing a jacket or boots, wear them on the plane to save space in your bag.",
  },
  {
    id: 6,
    title: "Keep Essentials in Your Personal Bag",
    description:
      "Important documents, medications, and electronics should always be in your carry-on.",
  },
];

const PackingLightGuide: React.FC = () => {
  return (
    <Container className="mt-5 py-5">
      <h1 className="text-center fw-bold">
        The Ultimate Guide to Packing Light
      </h1>
      <p className="text-center text-muted">
        Packing doesn't have to be stressful. Follow these tips to travel light
        and smart!
      </p>

      <div className="mt-4">
        {packingTips.map((tip) => (
          <section key={tip.id} className="mb-4">
            <h3>
              {tip.id}. {tip.title}
            </h3>
            <p>{tip.description}</p>
          </section>
        ))}
      </div>
    </Container>
  );
};

export default PackingLightGuide;

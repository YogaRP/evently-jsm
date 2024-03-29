import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";
import React, { FC } from "react";

interface UpdateEventPageProps {
  params: {
    id: string;
  };
}

const UpdateEventPage: FC<UpdateEventPageProps> = async ({
  params: { id },
}) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          userId={userId}
          event={event}
          eventId={event._id}
        />
      </div>
    </>
  );
};

export default UpdateEventPage;

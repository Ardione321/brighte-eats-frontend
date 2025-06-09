import { gql } from '@apollo/client';
import client from '@/lib/apollo-client';
import { Card } from '@/components/ui/card';

interface Service {
  id: string;
  type: string;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  mobile: string;
  postcode: string;
  services: Service[];
}

interface LeadPageProps {
  params: {
    id: string;
  };
}

const GET_LEAD = gql`
  query GetLead($id: ID!) {
    lead(id: $id) {
      id
      name
      email
      mobile
      postcode
      services {
        id
        type
      }
    }
  }
`;

export default async function LeadPage({ params }: LeadPageProps) {
  const { id } = params;

  try {
    const { data } = await client.query<{ lead: Lead }>({
      query: GET_LEAD,
      variables: { id },
      fetchPolicy: 'network-only',
    });

    if (!data.lead) {
      return <p className="p-6 text-center">Lead not found</p>;
    }

    const lead = data.lead;

    return (
      <div className="p-6 max-w-xl mx-auto">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">{lead.name}</h1>
          <p>
            <strong>Email:</strong> {lead.email}
          </p>
          <p>
            <strong>Mobile:</strong> {lead.mobile}
          </p>
          <p>
            <strong>Postcode:</strong> {lead.postcode}
          </p>

          <div className="mt-4">
            <strong>Services:</strong>
            <ul className="list-disc ml-6">
              {lead.services.map((service) => (
                <li key={service.id}>{service.type}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    );
  } catch (error) {
    return (
      <p className="p-6 text-center text-red-600">
        Error loading lead details.
      </p>
    );
  }
}

'use client';

import { gql, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13+ app router
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';

const GET_SERVICES = gql`
  query {
    services {
      id
      type
    }
  }
`;

const CREATE_LEAD = gql`
  mutation CreateLead($createLeadInput: CreateLeadInput!) {
    createLead(createLeadInput: $createLeadInput) {
      id
      name
    }
  }
`;

export default function CreateLeadPage() {
  const router = useRouter();
  const { data } = useQuery(GET_SERVICES);
  const [createLead, { loading }] = useMutation(CREATE_LEAD);
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    postcode: '',
    services: [] as string[],
  });

  const handleServiceToggle = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = async () => {
    try {
      const result = await createLead({ variables: { createLeadInput: form } });
      const newLeadId = result.data.createLead.id;
      alert('Lead created!');
      router.push(`/leads/${newLeadId}`);
    } catch (error) {
      alert('Error creating lead');
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Create New Lead</h1>

        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <Input
          placeholder="Postcode"
          value={form.postcode}
          onChange={(e) => setForm({ ...form, postcode: e.target.value })}
        />

        <div className="space-y-2">
          <p className="font-semibold">Select Services:</p>
          {data?.services.map((service: any) => (
            <label key={service.id} className="flex items-center space-x-2">
              <Checkbox
                checked={form.services.includes(service.id)}
                onCheckedChange={() => handleServiceToggle(service.id)}
              />
              <span>{service.type}</span>
            </label>
          ))}
        </div>

        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Creating...' : 'Create Lead'}
        </Button>
      </Card>
    </div>
  );
}

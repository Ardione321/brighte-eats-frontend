'use client';

import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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

const GET_LEADS = gql`
  query {
    leads {
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

export default function LeadsPage() {
  const { data, loading, error } = useQuery<{ leads: Lead[] }>(GET_LEADS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <p className="p-4 text-center">Loading...</p>;
  if (error) return <p className="p-4 text-center text-red-600">Error loading leads.</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto overflow-x-auto">
      <Table className="border border-gray-200 rounded-md">
        <TableHeader className="bg-gray-100 border-b border-gray-300">
          <TableRow>
            <TableHead className="text-sm font-medium text-gray-700">Name</TableHead>
            <TableHead className="text-sm font-medium text-gray-700">Email</TableHead>
            <TableHead className="text-sm font-medium text-gray-700">Mobile</TableHead>
            <TableHead className="text-sm font-medium text-gray-700">Postcode</TableHead>
            <TableHead className="text-sm font-medium text-gray-700">Services</TableHead>
            <TableHead className="text-sm font-medium text-gray-700 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.leads.map((lead) => (
            <TableRow key={lead.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.mobile}</TableCell>
              <TableCell>{lead.postcode}</TableCell>
              <TableCell>
                <ul className="list-disc ml-4">
                  {lead.services.map((service) => (
                    <li key={service.id}>{service.type}</li>
                  ))}
                </ul>
              </TableCell>
              <TableCell className="text-center">
                <Link href={`/leads/${lead.id}`}>
                  <Button size="sm">See Details</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

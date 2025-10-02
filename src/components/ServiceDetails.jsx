import React from 'react';

function Badge({ label, variant }) {
  const colors = {
    low: '#28a745',
    medium: '#ffc107',
    high: '#fd7e14',
    urgent: '#dc3545',
    open: '#3498db',
    'in-progress': '#e67e22',
    closed: '#95a5a6',
  };

  const bgColor = colors[variant] || '#bdc3c7';
  const style = {
    backgroundColor: bgColor,
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.85rem',
    textTransform: 'capitalize',
  };

  return <span style={style}>{label}</span>;
}

const sampleData = [
  {
    id: 1,
    customer: { name: 'John Doe', email: 'john.doe@email.com' },
    serviceType: 'technical',
    priority: 'low',
    status: 'open',
    description: 'Unable to receive otp.',
    submittedAt: '2025-10-01T14:35:00Z',
  },
  {
    id: 2,
    customer: { name: 'John Doe', email: 'john.doe@email.com' },
    serviceType: 'billing',
    priority: 'medium',
    status: 'in-progress',
    description: 'Payment does not reflect.',
    submittedAt: '2025-10-01T14:35:00Z',
  },{
    id: 3,
    customer: { name: 'John Doe', email: 'john.doe@email.com' },
    serviceType: 'general',
    priority: 'high',
    status: 'closed',
    description: 'How to register.',
    submittedAt: '2025-10-01T14:35:00Z',
  },
  {
    id: 4,
    customer: { name: 'John Doe', email: 'john.doe@email.com' },
    serviceType: 'complaint',
    priority: 'urgent',
    status: 'open',
    description: 'Service is slow.',
    submittedAt: '2025-10-01T14:35:00Z',
  },{
    id: 5,
    customer: { name: 'John Doe', email: 'john.doe@email.com' },
    serviceType: 'technical',
    priority: 'high',
    status: 'in-progress',
    description: 'Unable to reset password.',
    submittedAt: '2025-10-01T14:35:00Z',
  },
  {
    id: 6,
    customer: { name: 'John Doe', email: 'john.doe@email.com' },
    serviceType: 'billing',
    priority: 'medium',
    status: 'closed',
    description: 'Incorrect amount reflected.',
    submittedAt: '2025-10-01T14:35:00Z',
  },
];

export default function ServiceDetails() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <caption>SERVICE DETAILS TABLE</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name & Email</th>
          <th>Service Type</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Description</th>
          <th>Submitted At</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((data) => (
          <tr key={data.id} style={{ borderTop: '1px solid #ddd' }}>
            <td>{data.id}</td>
            <td>
              {data.customer.name}
              <br />
              <a href={`mailto:${data.customer.email}`}>{data.customer.email}</a>
            </td>
            <td style={{ textTransform: 'capitalize' }}>{data.serviceType}</td>
            <td>
              <Badge label={data.priority} variant={data.priority} />
            </td>
            <td>
              <Badge
                label={data.status.replace('-', ' ')}
                variant={data.status}
              />
            </td>
            <td>{data.description}</td>
            <td>
              {new Date(data.submittedAt).toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

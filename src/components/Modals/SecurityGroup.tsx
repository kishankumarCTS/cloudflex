'use client';

import { useState } from 'react';
import { CreateSecurityGroupProps, SecurityGroupRule } from '@/components/pages//SecurityGroup/types'; // adjust path if needed
import { Modal } from '@/components/ui/Modal';

export default function SecurityGroupModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateSecurityGroupProps) {
  const [securityGroupName, setSecurityGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [outboundRules, setOutboundRules] = useState<SecurityGroupRule[]>([
    { id: '1', etherType: '', protocol: '', portRange: '', remoteIpPrefix: '' },
    { id: '2', etherType: '', protocol: '', portRange: '', remoteIpPrefix: '' },
  ]);

  const handleSubmit = () => {
    onSubmit?.({
      name: securityGroupName,
      description,
      inboundRules: [],
      outboundRules,
    });
  };

  const updateOutboundRule = (
    id: string,
    field: keyof SecurityGroupRule,
    value: string
  ) => {
    setOutboundRules((prev) =>
      prev.map((rule) =>
        rule.id === id ? { ...rule, [field]: value } : rule
      )
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Security Group"
      footerButtons={[
        { variant: 'secondary', children: 'Close', onClick: onClose },
        { variant: 'primary', children: 'Download', onClick: handleSubmit },
      ]}
    >
      <div className="space-y-6">
        {/* Name + Description */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Security Group Name
            </label>
            <input
              type="text"
              value={securityGroupName}
              onChange={(e) => setSecurityGroupName(e.target.value)}
              placeholder="My Security Group"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description of security group"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-800"
            />
          </div>
        </div>

        {/* Inbound Rules */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Inbound Rules
          </h3>
          <p className="text-sm text-gray-500">
            There are no inbound rules in this security group
          </p>
        </div>

        {/* Outbound Rules */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-4">
            Outbound Rules
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {outboundRules.map((rule, index) => (
              <div key={rule.id} className="contents">
                <input
                  type="text"
                  value={rule.etherType}
                  onChange={(e) =>
                    updateOutboundRule(rule.id, 'etherType', e.target.value)
                  }
                  placeholder={index === 0 ? 'IPv4' : 'IPv6'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-800"
                />
                <input
                  type="text"
                  value={rule.protocol}
                  onChange={(e) =>
                    updateOutboundRule(rule.id, 'protocol', e.target.value)
                  }
                  placeholder="Any"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-800"
                />
                <input
                  type="text"
                  value={rule.portRange}
                  onChange={(e) =>
                    updateOutboundRule(rule.id, 'portRange', e.target.value)
                  }
                  placeholder="Any"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-800"
                />
                <input
                  type="text"
                  value={rule.remoteIpPrefix}
                  onChange={(e) =>
                    updateOutboundRule(rule.id, 'remoteIpPrefix', e.target.value)
                  }
                  placeholder={index === 0 ? '0.0.0.0/0' : '::/0'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-800"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

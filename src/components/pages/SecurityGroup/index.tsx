'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { CreateSecurityGroupProps, SecurityGroupRule } from './types';
import { Button } from '@/components/ui/Button'; 

export default function CreateSecurityGroup({
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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col">
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Create Security Group</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
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

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Inbound Rules</h3>
            <p className="text-sm text-gray-500">
              There are no inbound rules in this security group
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Outbound Rules</h3>
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

        <div className="flex justify-end gap-3 px-6 py-4">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

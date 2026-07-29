import React, { useState } from 'react';
import { X, Play, Bot, Workflow, Sparkles, CheckCircle2, Terminal, RefreshCw, Cpu, Database } from 'lucide-react';

interface AiAgentSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectId?: string;
}

export const AiAgentSimulatorModal: React.FC<AiAgentSimulatorModalProps> = ({ isOpen, onClose, initialProjectId }) => {
  if (!isOpen) return null;

  const agentPresets = [
    {
      id: 'crm-automation',
      name: 'CRM Lead Qualification & Enrichment Agent',
      icon: Workflow,
      description: 'Enriches inbound leads with firmographics, calculates intent score, and routes to HubSpot AE.',
      inputPlaceholder: 'Lead Email: sarah.j@growthtech.io | Company: GrowthTech | Monthly Budget: $15,000',
    },
    {
      id: 'dental-ai-support',
      name: 'Dental Emergency & Patient Scheduling Agent',
      icon: Bot,
      description: 'Verifies dental EHR calendar slots, checks emergency insurance coverage, and fires SMS booking link.',
      inputPlaceholder: 'Patient Note: Experiencing severe tooth pain in molar, need urgent appointment tomorrow morning.',
    },
    {
      id: 'restaurant-poster',
      name: 'AI Creative & Poster Generation Pipeline',
      icon: Sparkles,
      description: 'Engineers 4K culinary promo prompts and formats social asset variations for multi-branch dining brands.',
      inputPlaceholder: 'Dish: Truffle Wood-Fired Wagyu Pizza | Promo: 20% Off Weekend Special | Style: Moody Dark Culinary',
    },
  ];

  const [selectedAgentId, setSelectedAgentId] = useState<string>(initialProjectId || 'crm-automation');
  const [customInput, setCustomInput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<{ step: string; timestamp: string; status: 'info' | 'success' | 'warning' }[]>([]);
  const [executionResult, setExecutionResult] = useState<any>(null);

  const currentPreset = agentPresets.find(p => p.id === selectedAgentId) || agentPresets[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setLogs([]);
    setExecutionResult(null);

    const now = () => new Date().toLocaleTimeString('en-US', { hour12: false });

    // Step 1: Webhook payload received
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { step: '[00:01] Webhook Inbound Payload Triggered', timestamp: now(), status: 'info' }
      ]);
    }, 300);

    // Step 2: Context Retrieval & Vector Search
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { step: '[00:02] Querying Pinecone Vector Index & System Knowledge Base', timestamp: now(), status: 'info' }
      ]);
    }, 800);

    // Step 3: LLM Intent Rating & Function Call
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { step: '[00:03] Gemini 1.5 Pro Function Calling — Extracting Struct JSON Specs', timestamp: now(), status: 'info' }
      ]);
    }, 1400);

    // Step 4: CRM API Write & Dispatch
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { step: '[00:04] Executing API Webhook: HubSpot / Cal.com / Twilio Dispatch', timestamp: now(), status: 'success' },
        { step: '[00:05] Autonomous Execution Completed (Duration: 340ms)', timestamp: now(), status: 'success' }
      ]);

      setIsRunning(false);

      if (selectedAgentId === 'crm-automation') {
        setExecutionResult({
          status: 'SUCCESS',
          leadScore: '94 / 100 (HIGH INTENT)',
          firmographics: {
            company: 'GrowthTech Inc.',
            revenueTier: '$5M - $10M',
            techStack: ['HubSpot', 'n8n', 'OpenAI'],
          },
          assignedAE: 'Marcus Vance (Account Exec)',
          routingSla: '11.8 Seconds',
          personalizedEmailHook: 'Hi Sarah, noticed GrowthTech is expanding its tech stack on HubSpot. Here is an autonomous n8n lead routing blueprint custom for your team.',
        });
      } else if (selectedAgentId === 'dental-ai-support') {
        setExecutionResult({
          status: 'CONFIRMED',
          triageLevel: 'Urgent Emergency Care',
          insuranceStatus: 'In-Network (Apex PPO)',
          suggestedSlot: 'Tomorrow at 09:30 AM (Dr. Elena Rostova)',
          smsPayloadSent: 'Apex Dental: Your emergency appointment reservation is reserved for 9:30 AM tomorrow. Confirmation ID: #DENT-9942.',
        });
      } else {
        setExecutionResult({
          status: 'ASSETS GENERATED',
          promptEngineered: 'Cinematic 8k photography of Truffle Wood-Fired Wagyu Pizza, steaming gourmet crust, dramatic dark moody lighting, gold accents, shallow depth of field --ar 4:5 --v 6.0',
          renderedVariations: ['4K Instagram Story (1080x1920)', 'Print Poster (300DPI PDF)', 'Facebook Banner'],
          productionTime: '2.4 Seconds',
        });
      }

    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div className="bg-[#181818] border border-white/15 rounded-[32px] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#C7FF00]/10 border border-[#C7FF00]/30 text-[#C7FF00]">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-display">SHAFIN's AI Agent Console</h2>
              <p className="text-xs text-[#808080] font-mono">Simulate Production Autonomous Workflows</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Selector */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase text-[#808080] mb-2">Select Agent Presets</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {agentPresets.map((preset) => {
              const Icon = preset.icon;
              const isSelected = selectedAgentId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setSelectedAgentId(preset.id);
                    setExecutionResult(null);
                    setLogs([]);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#C7FF00]/10 border-[#C7FF00] text-white shadow-lg'
                      : 'bg-[#141414] border-white/10 text-[#B5B5B5] hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#C7FF00]' : 'text-[#808080]'}`} />
                    <span className="text-xs font-bold font-display line-clamp-1">{preset.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Parameters Box */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase text-[#808080] mb-2">Payload Data Input</label>
          <div className="relative">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder={currentPreset.inputPlaceholder}
              className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#C7FF00] rounded-xl px-4 py-3.5 text-xs font-mono text-white placeholder-[#606060] outline-none"
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleRunSimulation}
          disabled={isRunning}
          className="w-full py-4 text-sm font-bold text-black bg-[#C7FF00] hover:bg-[#D7FF2F] rounded-full font-display flex items-center justify-center gap-2 mb-8 shadow-[0_0_25px_rgba(199,255,0,0.3)] transition-all"
        >
          {isRunning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Orchestrating Agent Nodes...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-black" />
              <span>Execute Autonomous Pipeline</span>
            </>
          )}
        </button>

        {/* Terminal Log Output */}
        {logs.length > 0 && (
          <div className="bg-[#0B0B0B] border border-white/10 rounded-2xl p-5 font-mono text-xs mb-6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[#808080]">
              <span className="flex items-center gap-1.5 text-[10px] uppercase">
                <Terminal className="w-3.5 h-3.5 text-[#C7FF00]" /> Terminal Execution Logs
              </span>
              <span className="text-[10px] text-[#C7FF00]">STATUS: RUNNING</span>
            </div>
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start justify-between gap-2 text-white/90">
                <span>{log.step}</span>
                <span className="text-[10px] text-[#808080] shrink-0">{log.timestamp}</span>
              </div>
            ))}
          </div>
        )}

        {/* Struct JSON Execution Result Card */}
        {executionResult && (
          <div className="bg-[#141414] border border-[#C7FF00]/40 rounded-2xl p-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-[#C7FF00] uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Agent Pipeline Output (Structured Specs)
              </span>
              <span className="text-[10px] font-mono text-[#808080]">HTTP 200 OK</span>
            </div>

            <pre className="bg-[#0B0B0B] p-4 rounded-xl text-xs font-mono text-[#C7FF00] overflow-x-auto">
              {JSON.stringify(executionResult, null, 2)}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};

'use client'

import React, { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2, Settings2 } from 'lucide-react'

interface Process {
  id: string
  name: string
  department: string
}

function SortableProcessItem({ process, onRemove }: { process: Process, onRemove: (id: string) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: process.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.9 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-4 p-4 mb-3 bg-white/5 backdrop-blur-md border ${isDragging ? 'border-[var(--color-red)] shadow-[0_0_20px_rgba(192,57,43,0.3)]' : 'border-white/10'} rounded-xl shadow-lg transition-colors group hover:bg-white/10`}
    >
      <div {...attributes} {...listeners} className="cursor-grab text-white/30 hover:text-white transition-colors">
        <GripVertical className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <div className="font-medium text-white/90 text-sm">{process.name}</div>
        <div className="text-[11px] text-white/50 font-mono tracking-wide uppercase mt-0.5">{process.department}</div>
      </div>
      <button className="text-white/30 hover:text-white transition-colors p-2">
        <Settings2 className="w-4 h-4" />
      </button>
      <button 
        onClick={() => onRemove(process.id)}
        className="text-white/30 hover:text-[var(--color-red)] transition-colors p-2"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export function ProcessBuilder() {
  const [processes, setProcesses] = useState<Process[]>([
    { id: '1', name: 'Client Onboarding', department: 'Operations' },
    { id: '2', name: 'Monthly Invoicing', department: 'Finance' },
    { id: '3', name: 'Quality Assurance Review', department: 'Service Delivery' },
  ])
  const [newProcessName, setNewProcessName] = useState('')
  const [newProcessDept, setNewProcessDept] = useState('Operations')

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setProcesses((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id)
        const newIndex = items.findIndex((i) => i.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const addProcess = () => {
    if (!newProcessName.trim()) return
    setProcesses([
      ...processes, 
      { id: Date.now().toString(), name: newProcessName, department: newProcessDept }
    ])
    setNewProcessName('')
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
        <div className="flex-1">
          <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">Process Name</label>
          <input 
            type="text" 
            value={newProcessName}
            onChange={(e) => setNewProcessName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addProcess()}
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] text-white text-sm placeholder:text-white/20 transition-all"
            placeholder="e.g. Talent Acquisition"
          />
        </div>
        <div className="w-full md:w-56">
          <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">Department</label>
          <select 
            value={newProcessDept}
            onChange={(e) => setNewProcessDept(e.target.value)}
            className="w-full p-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] text-white text-sm transition-all"
          >
            <option>Operations</option>
            <option>Finance</option>
            <option>Sales</option>
            <option>HR</option>
            <option>IT</option>
          </select>
        </div>
        <button 
          onClick={addProcess}
          className="w-full md:w-auto px-8 py-3 bg-[var(--color-red)]/20 text-[var(--color-red)] border border-[var(--color-red)]/50 rounded-lg font-medium hover:bg-[var(--color-red)] hover:text-white transition-all text-sm"
        >
          Add Process
        </button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={processes} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-1">
            {processes.map((p) => (
              <SortableProcessItem 
                key={p.id} 
                process={p} 
                onRemove={(id) => setProcesses(processes.filter(proc => proc.id !== id))} 
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}

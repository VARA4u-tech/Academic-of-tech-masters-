import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { studentPlacementsData, detailedPlacementsData } from "@/data/placements";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Calendar, Building2, TrendingUp, Users, Award, DollarSign } from 'lucide-react';
import { Input } from "@/components/ui/input";

const PlacementStats = () => {
    const stats = [
        { label: "Students Placed", value: "300+", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
        { label: "Highest Package", value: "32 LPA", icon: TrophyIcon, color: "text-amber-500", bg: "bg-amber-500/10" },
        { label: "Average Package", value: "8.5 LPA", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { label: "Hiring Partners", value: "50+", icon: Building2, color: "text-purple-500", bg: "bg-purple-500/10" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 -mt-16 relative z-20">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 backdrop-blur-sm"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${stat.bg}`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <span className={`text-2xl font-black font-display ${stat.color}`}>{stat.value}</span>
                    </div>
                    <p className="text-slate-500 font-medium">{stat.label}</p>
                </motion.div>
            ))}
        </div>
    );
};

// Custom Trophy Icon component since Lucide's Trophy might be named differently or we want a specific style
const TrophyIcon = ({ className }: { className?: string }) => (
    <Award className={className} />
);

const Placements = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPlacements = detailedPlacementsData.filter(placement =>
        placement.consultantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        placement.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        placement.client.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-32 bg-[#020617] overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                            Career Success
                        </span>
                        <h1 className="text-4xl md:text-7xl font-display font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                            Our Placement <span className="text-blue-500">Records</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200/70 max-w-3xl mx-auto leading-relaxed mb-10">
                            We don't just teach; we transform careers. Explore our latest placement statistics and see where our students are working today.
                        </p>
                    </motion.div>
                </div>
            </section>

            <PlacementStats />

            {/* Star Placements Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Star Performers</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Meet our top achievers who have secured premium positions at leading global tech companies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {studentPlacementsData.map((student, index) => (
                            <motion.div
                                key={student.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 text-white">
                                        <h3 className="font-bold text-lg">{student.name}</h3>
                                        <p className="text-blue-200 text-sm font-medium">{student.jobTitle}</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-8 relative">
                                    <div className="absolute -top-6 right-6 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 z-20">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Placed At</p>
                                            <div className="flex flex-wrap gap-2">
                                                {student.companies.map((company, i) => (
                                                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold">
                                                        {company}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Placements Table Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Detailed Placement Report</h2>
                            <p className="text-slate-500">A comprehensive list of our recent student placements.</p>
                        </div>
                        <div className="relative w-full md:w-96">
                            <Input
                                placeholder="Search by name, company, or role..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 py-6 bg-slate-50 border-slate-200 focus:ring-blue-500/20"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Candidate</th>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Company</th>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                                        <th className="px-8 py-5 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Package</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredPlacements.map((item) => (
                                        <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="font-bold text-slate-900">{item.consultantName}</div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="text-sm font-medium text-slate-600 flex items-center gap-2">
                                                    <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                                                    {item.jobTitle}
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {item.client}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="text-sm text-slate-500 flex items-center gap-2">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {item.startDate}
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="text-sm text-slate-500 flex items-center gap-2">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {item.location}
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="font-bold text-emerald-600">{item.salary}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {filteredPlacements.length === 0 && (
                            <div className="p-12 text-center text-slate-500">
                                No placements found matching your search.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Placements;

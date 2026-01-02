import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlacementsSection } from "@/components/PlacementsSection";
import { studentPlacementsData, detailedPlacementsData } from "@/data/placements";
import { StudentPlacementCard } from "@/components/StudentPlacementCard";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-10 section-heading">What We Do</h1>
            <p className="text-xl text-center text-muted-foreground mb-12 section-subheading">
              Discover how we empower careers through comprehensive support and valuable resources.
            </p>
        </div>

        {/* Existing Placements Section (Features & Accordion) */}
        <PlacementsSection />

        {/* New Student Success Stories Section */}
        <section id="student-placements" className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-12 section-heading">Our Students Got Placed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studentPlacementsData.map((placement) => (
                    <StudentPlacementCard key={placement.id} placement={placement} />
                    ))}
                </div>
            </div>
        </section>

        {/* New Detailed Placements Table Section */}
        <section id="detailed-placements" className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 section-heading">Detailed Placements</h2>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Consultant Name</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Salary</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {detailedPlacementsData.map((placement) => (
                    <TableRow key={placement.id}>
                      <TableCell>{placement.consultantName}</TableCell>
                      <TableCell>{placement.jobTitle}</TableCell>
                      <TableCell>{placement.client}</TableCell>
                      <TableCell>{placement.startDate}</TableCell>
                      <TableCell>{placement.duration}</TableCell>
                      <TableCell>{placement.location}</TableCell>
                      <TableCell>{placement.salary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Interns Placeholder Section */}
        <section id="interns" className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-6 section-heading">Internship Opportunities</h2>
                <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
                    We connect our students with valuable internship opportunities to gain real-world experience and build their professional network. Details coming soon!
                </p>
            </div>
        </section>

        {/* Resources Placeholder Section */}
        <section id="resources" className="py-12 sm:py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-6 section-heading">Learning Resources</h2>
                <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
                    Access a wealth of learning resources, including tutorials, guides, and project templates to support your continuous growth.
                </p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
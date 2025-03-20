'use client';

import { useState } from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Modal,
  Button,
} from '@carbon/react';
import styles from '../dashboard.module.scss';

const headers = [
  {
    key: 'id',
    header: 'ID',
  },
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'email',
    header: 'Email',
  },
  {
    key: 'status',
    header: 'Status',
  },
];

const rows = [
  {
    id: '1',
    name: 'Hemanth',
    email: 'hemanth@mail.com',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Ajay',
    email: 'ajay@mail.com',
    status: 'Inactive',
  },
  {
    id: '3',
    name: 'Punith Raj',
    email: 'punithraj@mail.com',
    status: 'Active',
  },
];

export default function ArchivePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleRowClick = (row: any) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.tableContainer}>
      <h1 className="cds--type-productive-heading-05">Archive Records</h1>
      
      <DataTable rows={rows} headers={headers}>
        {({ rows, headers, getHeaderProps, getTableProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                  <TableCell>
                    <Button
                      kind="ghost"
                      size="sm"
                      onClick={() => handleRowClick(row)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>

      <Modal
        open={isModalOpen}
        modalHeading="Record Details"
        primaryButtonText="Close"
        secondaryButtonText="Archive"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div className={styles.modalContent}>
          {selectedRow && (
            <>
              <p>ID: {selectedRow.cells[0].value}</p>
              <p>Name: {selectedRow.cells[1].value}</p>
              <p>Email: {selectedRow.cells[2].value}</p>
              <p>Status: {selectedRow.cells[3].value}</p>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
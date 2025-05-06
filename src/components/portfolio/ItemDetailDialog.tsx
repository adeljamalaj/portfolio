
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ImageWithLoading from './ImageWithLoading';

interface ItemDetailDialogProps {
  selectedItem: {
    id: string;
    src: string;
    alt: string;
    caption?: string;
    type: string;
  } | null;
  onClose: () => void;
}

const ItemDetailDialog = ({ selectedItem, onClose }: ItemDetailDialogProps) => {
  if (!selectedItem) return null;

  return (
    <Dialog open={!!selectedItem} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedItem.alt}</DialogTitle>
        </DialogHeader>
        <div className="relative max-h-[70vh] w-full overflow-hidden flex justify-center">
          <div className="max-h-full max-w-full">
            <ImageWithLoading 
              item={selectedItem}
              className="h-full w-full object-contain rounded-md"
              objectFit="contain"
            />
          </div>
        </div>
        {selectedItem.caption && (
          <p className="text-center text-gray-600 mt-2">{selectedItem.caption}</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailDialog;

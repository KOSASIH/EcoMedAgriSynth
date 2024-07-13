import numpy as np

class BaseEditor:
    def __init__(self, gene_sequence):
        self.gene_sequence = gene_sequence

    def edit_base(self, target_base, new_base):
        # Implement base editing algorithm
        edited_sequence = np.array(list(self.gene_sequence))
        edited_sequence[target_base] = new_base
        return ''.join(edited_sequence)

    def edit_multiple_bases(self, target_bases, new_bases):
        # Implement multiple base editing algorithm
        edited_sequence = self.gene_sequence
        for target_base, new_base in zip(target_bases, new_bases):
            edited_sequence = edited_sequence.replace(target_base, new_base)
        return edited_sequence

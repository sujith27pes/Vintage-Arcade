#include <stdio.h>
#include <stdlib.h>

#define MAX_SEGMENTS 10

struct mem_block
{
    int base;
    int limit;
};

struct mem_block segment_table[MAX_SEGMENTS] = {
    {11, 1101},
    {1101, 1201},
    {1201, 1301},
    {1301, 1401},
    {1401, 1501},
    {1501, 1601},
    {1601, 1701},
    {1701, 1801},
    {1801, 1901},
    {1901, 11001}
};

int main()
{
    int segment_no, offset;

    printf("Enter segment number: ");
    scanf("%d", &segment_no);

    printf("Enter offset: ");
    scanf("%d", &offset);

    if (segment_no < 0 || segment_no >= MAX_SEGMENTS)
    {
        printf("Invalid segment number\n");
        exit(1);
    }

    if (offset >= segment_table[segment_no].limit)
    {
        printf("Invalid offset\n");
        exit(1);
    }

    int physical_address = segment_table[segment_no].base + offset;
    printf("The physical address is: %d\n", physical_address);

    return 0;
}

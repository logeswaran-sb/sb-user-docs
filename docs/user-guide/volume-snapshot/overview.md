---
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

The **Volume Snapshot** feature allows users to create point-in-time backups of persistent volumes. These snapshots serve as a safeguard, enabling users to restore volumes to their previous states in the event of accidental data loss, corruption, or system failure. This functionality is especially crucial in high-availability and mission-critical environments.

---

### Use Cases

-   Safeguarding root disks of virtual machines before OS upgrades.
    
-   Creating backups before running intensive operations or applying configuration changes.
    
-   Rapid disaster recovery using stored snapshots.
    
-   Testing or cloning volumes in staging environments.

---

### Navigation Path

**Home > Compute > Volume Snapshot**

The **Volume Snapshot** panel is accessible through the **Compute** module in the left navigation pane.

<img src="/user-guide/volume-snapshot/overview/Image-01.JPG" width="30%" />

---

### Snapshot Table View

| S. No | Option | Description|
|-------|--------|------------|
|1|Name & Company|The name of the volume (typically attached to a VM) and the associated user or company.
|2|Type|Snapshot type – e.g., `MANUAL` (created by user), or `AUTO` (system scheduled if available).
|3|Volume Name|Identifier of the volume from which the snapshot was taken (e.g., `ROOT-4291`).
|4|Status|Indicates current snapshot state (e.g., `Backed Up`, `In Progress`, `Failed`).
|5|Created Date|Timestamp when the snapshot was successfully created.
|6|Actions|Quick action icons allow the user to perform snapshot management operations. Actions include: **Create Volume, Create Template, Revert to Snapshot & Delete Volume Snapshot**

<img src="/user-guide/volume-snapshot/overview/Image-02.JPG" width="90%" />

---

### Quick Features

-   **Quick Search**: Instantly filter snapshot entries by name or volume ID.
    
-   **Refresh**: Reloads the snapshot list with updated status or new entries.
    
-   **Status Tags**: Visually highlight the current snapshot state.

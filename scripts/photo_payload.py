#!/usr/bin/env python3
"""Emit upload metadata or one bounded base64 chunk; never a whole large payload."""
import argparse
import base64
import hashlib
import json
from pathlib import Path
import sys

CHUNK_CHARACTERS = 200_000  # Divisible by four; conservative shell-output size.


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("path", type=Path)
    parser.add_argument("--chunk", type=int, help="Zero-based base64 chunk index")
    args = parser.parse_args()
    payload = args.path.read_bytes()
    encoded = base64.b64encode(payload).decode("ascii")
    count = (len(encoded) + CHUNK_CHARACTERS - 1) // CHUNK_CHARACTERS
    if args.chunk is not None:
        if not 0 <= args.chunk < count:
            parser.error(f"chunk index must be between 0 and {count - 1}")
        start = args.chunk * CHUNK_CHARACTERS
        sys.stdout.write(encoded[start:start + CHUNK_CHARACTERS])
        return
    git_header = f"blob {len(payload)}\0".encode("ascii")
    print(json.dumps({
        "path": str(args.path),
        "bytes": len(payload),
        "sha256": hashlib.sha256(payload).hexdigest(),
        "git_blob_sha": hashlib.sha1(git_header + payload).hexdigest(),
        "base64_characters": len(encoded),
        "chunk_characters": CHUNK_CHARACTERS,
        "chunk_count": count,
    }, indent=2))


if __name__ == "__main__":
    main()
